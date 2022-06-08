import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './style.css';

export default function App() {
  let arrobjs = [
    {
      header: 'Header 1',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
    {
      header: 'Header 2',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
    {
      header: 'Header 3',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
    {
      header: 'Header 4',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
    {
      header: 'Header 5',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
    {
      header: 'Header 6',
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet senectus enim amet cubilia dictum; elit at. Varius dis semper dignissim sagittis cubilia ornare felis. Donec sociosqu massa sit rhoncus; ante sed ipsum. Malesuada natoque finibus sed; proin platea euismod congue. Porta odio aliquet habitant aenean conubia potenti lacus. Sodales sodales dignissim condimentum id venenatis libero adipiscing.

      At facilisis consequat non nascetur pretium purus fames ad. Mus conubia duis, gravida tincidunt fermentum per ullamcorper. Fames habitasse elementum rutrum, curabitur pretium ridiculus. Nulla blandit integer fermentum habitant fringilla quisque mus. Etiam facilisi nullam felis vitae orci erat consectetur. Fusce condimentum ante magna dolor, ipsum interdum curabitur. Mauris at neque massa quis aliquet venenatis vivamus litora. Placerat vitae dis amet etiam tortor adipiscing! Mauris dignissim magna tempus curabitur ornare justo inceptos fringilla.`,
    },
  ];

  return (
    <div className="mainDiv">
      <div className="note">Sorry, this is not supported for your device</div>
      {arrobjs.map((ele) => (
        <div className="card">
          <div className="head">{ele.header}</div>
          <div className="cont">{ele.content}</div>
        </div>
      ))}
    </div>
  );
}
