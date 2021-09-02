import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMarkdown,
  update,
} from './previewerSlice';
import './previewer.scss';
import marked from 'marked';
import DOMPurify from 'dompurify';

export function Previewer(){
  const markdown = useSelector(selectMarkdown);
  const dispatch = useDispatch();

    return (
      <div id='container'>
        <div id='input'>
          <textarea value={markdown}
            onChange={(e) => dispatch(update(e.target.value))}>
          </textarea>
        </div>
        <div id='output' 
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdown))}} />
      </div>
    );
}