from flask import Flask, Response, jsonify
from flask_cors import CORS, cross_origin
import cv2

app = Flask(__name__)
video = cv2.VideoCapture(1)
face_cascade = cv2.CascadeClassifier()
face_cascade.load(cv2.samples.findFile("yqc.xml"))
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.route('/')
def index():
    return "uwu"

def gen(video):
    while True:
        success, image = video.read()
        frame_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        frame_gray = cv2.equalizeHist(frame_gray)

        faces = face_cascade.detectMultiScale(frame_gray)

        for (x, y, w, h) in faces:
            center = (x + w//2, y + h//2)
            cv2.putText(image, "X: " + str(center[0]) + " Y: " + str(center[1]), (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 3)
            image = cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)

            faceROI = frame_gray[y:y+h, x:x+w]
        ret, jpeg = cv2.imencode('.jpg', image)

        frame = jpeg.tobytes()
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    global video
    return Response(gen(video),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/ping")
@cross_origin()
def ping():
    return jsonify("{'status':'ok'}")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4269, threaded=True)
