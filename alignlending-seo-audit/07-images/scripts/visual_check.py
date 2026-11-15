#!/usr/bin/env python3
"""
Side-by-side visual QA for optimized heroes (100 % crops, original vs optimized), plus a
mobile-hero simulation (768w vs 1600w under the template's mobile overlay gradient).

Usage: python3 -I visual_check.py --data "$DATA" --out ../ --preview /some/scratch/folder
Writes PNG contact sheets to --preview (not into the repo).
"""
import argparse, os
from PIL import Image, ImageDraw

SAMPLES = [
    ("wp-content_uploads_2026_10_align-hero-city-grosse-pointe-farms.webp", "optimized/heroes/align-hero-city-grosse-pointe-farms.webp", (0.55, 0.55)),
    ("wp-content_uploads_learn_how-to-qualify-for-jumbo-loan.webp", "optimized/learn/how-to-qualify-for-jumbo-loan.webp", (0.5, 0.45)),
    ("wp-content_uploads_2026_09_align-hero-30-year-fixed.webp", "optimized/heroes/align-hero-30-year-fixed.webp", (0.6, 0.6)),
]


def crop_at(im, fx, fy, w=560, h=420):
    x = int((im.width - w) * fx); y = int((im.height - h) * fy)
    return im.crop((x, y, x + w, y + h))


def label(im, text):
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, 8 + 7 * len(text), 18), fill=(0, 0, 0))
    d.text((4, 3), text, fill=(255, 255, 0))
    return im


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--preview", required=True)
    a = ap.parse_args()
    os.makedirs(a.preview, exist_ok=True)
    for i, (raw, opt, (fx, fy)) in enumerate(SAMPLES, 1):
        o = Image.open(os.path.join(a.data, "img_raw", raw)).convert("RGB")
        n = Image.open(os.path.join(a.out, opt)).convert("RGB")
        ref = o.resize(n.size, Image.LANCZOS)  # same pixel grid, no compression: the fair reference
        sheet = Image.new("RGB", (1120 + 10, 420 + 10 + 315), (255, 255, 255))
        sheet.paste(label(crop_at(ref, fx, fy), f"original resized to {n.width}w (lossless ref)"), (0, 0))
        sheet.paste(label(crop_at(n, fx, fy), f"optimized {os.path.getsize(os.path.join(a.out, opt))//1000} KB vs {os.path.getsize(os.path.join(a.data,'img_raw',raw))//1000} KB"), (570, 0))
        full = n.copy(); full.thumbnail((560, 315)); sheet.paste(full, (0, 430))
        sheet.save(os.path.join(a.preview, f"qa_{i}.png"))
    # mobile simulation: 390 x 1000 CSS px hero box at DPR 2, object-fit cover, object-position 60% 72%,
    # overlay linear-gradient(180deg, rgba(13,14,18,.9) 0, .82 60%, .7 100%) from the template CSS
    raw = SAMPLES[0][0]
    stem = "align-hero-city-grosse-pointe-farms"
    tiles = []
    for tag, path in (("768w", f"optimized/responsive/{stem}-768w.webp"), ("1600w", f"optimized/heroes/{stem}.webp")):
        im = Image.open(os.path.join(a.out, path)).convert("RGB")
        W, H = 780, 2000
        s = max(W / im.width, H / im.height)
        r = im.resize((round(im.width * s), round(im.height * s)), Image.BICUBIC)
        x = int((r.width - W) * 0.60); y = int((r.height - H) * 0.72)
        box = r.crop((x, y, x + W, y + H))
        ov = Image.new("RGBA", (W, H))
        px = ov.load()
        for yy in range(H):
            t = yy / H
            al = 0.9 + (0.82 - 0.9) * (t / 0.6) if t <= 0.6 else 0.82 + (0.7 - 0.82) * ((t - 0.6) / 0.4)
            for xx in range(W):
                px[xx, yy] = (13, 14, 18, int(al * 255))
        comp = Image.alpha_composite(box.convert("RGBA"), ov).convert("RGB")
        tiles.append(label(comp.crop((0, 1000, 780, 2000)), f"mobile hero lower half, source {tag}"))
    m = Image.new("RGB", (1570, 1000), (255, 255, 255))
    m.paste(tiles[0], (0, 0)); m.paste(tiles[1], (790, 0))
    m.save(os.path.join(a.preview, "qa_mobile_overlay.png"))
    print("wrote", a.preview)


if __name__ == "__main__":
    main()
