# decoding: shift_jis
import markovify
import MeCab

# Load file
text_file = open('data.txt', "r",encoding="utf-8")
text = text_file.read()

# Parse text using MeCab
parsed_text = MeCab.Tagger('-Owakati').parse(text)

# Build model
text_model = markovify.Text(parsed_text, state_size=2)

# Output
for _ in range(10):
    sentence = text_model.make_short_sentence(100, 20, tries=100).replace(' ', '')
    print(sentence)