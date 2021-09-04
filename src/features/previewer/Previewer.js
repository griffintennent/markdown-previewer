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
  const marked = require('marked');

  marked.setOptions({
    gfm: true,
    breaks: true
  })

    return (
      <div id='container'>
        <div id="titleArea"><h1 id='title'>Markdown Previewer</h1></div>
        <div id='input'>
          <textarea id='editor' value={markdown}
            onChange={(e) => dispatch(update(e.target.value))}>
          </textarea>
        </div>
        <div id='preview' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdown))}} 
        />
      </div>
    );
}