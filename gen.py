import markovify
while 1 == 1:
    input = open('splitted.txt', 'r', encoding='utf-8')
    model = markovify.NewlineText(input.read(), state_size=1)
    sentence = {model.make_sentence()}

    ##print(type(str(sentence)))
    remov = str(sentence).replace(' ','').strip("{''}")
    if 'None' not in remov:
        ##print(remov)
        break
    else:
        ##print("retunr")
        continue

print(remov)