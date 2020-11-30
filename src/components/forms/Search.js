import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined,AudioOutlined } from "@ant-design/icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };
  const { transcript, resetTranscript } = useSpeechRecognition()

 
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <AudioOutlined onClick={SpeechRecognition.startListening}/>
      <p>{transcript}</p>

      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Speak something"
        
      />
      
      <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
      
    </form>
  );
};

export default Search;