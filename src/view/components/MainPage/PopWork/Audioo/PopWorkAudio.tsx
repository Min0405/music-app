import PopAudioTitle from "./PopAudio/PopAudioTitle";
import PopAudioPost from "./PopAudioPost/PopAudioPost";

import './PopWorkAudio.scss'

const PopWorkAudio = () => {
  return (
    <div className="main">
      <PopAudioTitle />

      <div className="audiopost">      
        <PopAudioPost frameWidth={300} frameHeight={250} />
        <PopAudioPost frameWidth={300} frameHeight={250} />
        <PopAudioPost frameWidth={300} frameHeight={250} />
        <PopAudioPost frameWidth={300} frameHeight={250} />
      </div>
    </div>
  );
}
export default PopWorkAudio;