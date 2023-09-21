# from django.http import JsonResponse
# from gtts import gTTS

# def text_to_speech(request):
#     text = request.GET.get('text', '')
#     if text:
#         # Use the Google Text-to-Speech API to convert text to speech
#         tts = gTTS(text=text, lang='en')
#         # Save the generated speech to a file (you can store it temporarily)
#         speech_file = "path/to/speech.mp3"
#         tts.save(speech_file)
#         # Return the path to the speech file
#         return JsonResponse({'speech_file': speech_file})
#     else:
#         return JsonResponse({'error': 'No text provided'})
