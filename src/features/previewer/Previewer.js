import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMarkdown,
  update,
} from './previewerSlice';
import styles from './previewer.scss';

export function Previewer(){
  const markdown = useSelector(selectMarkdown);
  const dispatch = useDispatch();

    return (
      <div id='container'>
        <div id='input'>
          <textarea 
            onChange={(e) => dispatch(update(e.target.value))}>
          </textarea>
        </div>
        <div id='output'>
          <textarea value = {markdown}></textarea>
        </div>
      </div>
    );
}