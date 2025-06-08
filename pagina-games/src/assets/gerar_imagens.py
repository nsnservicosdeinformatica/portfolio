from PIL import Image, ImageDraw, ImageFont

# Lista de imagens: (nome, texto, tamanho, cor de fundo)
imagens = [
    # Categorias
    ("valorant.jpg", "Valorant", (300, 400), "#1976f7"),
    ("roblox.jpg", "Roblox", (300, 400), "#43a047"),
    ("genshin.jpg", "Genshin", (300, 400), "#8e24aa"),
    ("clash.jpg", "Clash", (300, 400), "#e53935"),
    ("fortnite.jpg", "Fortnite", (300, 400), "#ffb300"),
    ("throne.jpg", "Throne", (300, 400), "#23272f"),
    ("minecraft.jpg", "Minecraft", (300, 400), "#00bcd4"),
    ("lol.jpg", "LOL", (300, 400), "#607d8b"),
    # Destaques
    ("lol1.jpg", "LOL 1", (300, 400), "#1976f7"),
    ("lol2.jpg", "LOL 2", (300, 400), "#1976f7"),
    ("wildrift.jpg", "Wild Rift", (300, 400), "#43a047"),
    ("lol3.jpg", "LOL 3", (300, 400), "#607d8b"),
    # Populares
    ("freefire.jpg", "Free Fire", (300, 400), "#e53935"),
    ("steam.jpg", "Steam", (300, 400), "#23272f"),
    ("valorant2.jpg", "Valorant 2", (300, 400), "#1976f7"),
    ("anime.jpg", "Anime", (300, 400), "#8e24aa"),
    # Blog
    ("bloxfruits.jpg", "Blox Fruits", (300, 400), "#43a047"),
    ("marvel.jpg", "Marvel", (300, 400), "#23272f"),
    ("pokemon.jpg", "Pokémon", (300, 400), "#ffb300"),
    ("author1.png", "X", (64, 64), "#1976f7"),
    # Avatares
    ("avatar1.png", "A1", (64, 64), "#1976f7"),
    ("avatar2.png", "A2", (64, 64), "#43a047"),
    ("avatar3.png", "A3", (64, 64), "#e53935"),
    ("avatar4.png", "A4", (64, 64), "#ffb300"),
]

def gerar_imagem(nome, texto, tamanho, cor):
    img = Image.new("RGB", tamanho, cor)
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 32 if tamanho[1] > 100 else 20)
    except:
        font = ImageFont.load_default()
    try:
        # Pillow >= 8.0.0
        bbox = draw.textbbox((0, 0), texto, font=font)
        w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    except AttributeError:
        # Pillow < 8.0.0
        w, h = draw.textsize(texto, font=font)
    draw.text(((tamanho[0]-w)/2, (tamanho[1]-h)/2), texto, fill="white", font=font)
    img.save(nome)

for nome, texto, tamanho, cor in imagens:
    gerar_imagem(nome, texto, tamanho, cor)

print("Imagens geradas com sucesso!")