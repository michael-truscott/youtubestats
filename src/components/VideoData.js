import React from 'react';

function VideoData(props) {
    let dataContents;
    if (!props.data) {
        dataContents = (
            <p>No Data</p>
        );
    } else {
        dataContents = (
            <ul>
                <h3>Thumbnail</h3>
                <img src={props.data.thumbnail.url} alt="Video Thumbnail"
                    width={props.data.thumbnail.width}
                    height={props.data.thumbnail.height} />
                <li><b>Title</b> - {props.data.title}</li>
                <li><b>Channel Title</b> - {props.data.channelTitle}</li>
                <li><b>Tags</b>
                    {!props.data.tags ? ' - None' : (
                    <ul>
                        {props.data.tags.map((tag,i) => <li key={i}>{tag}</li>)}
                    </ul>
                    )}
                </li>
            </ul>
        );
    }

    return (
        <div className="video-data">
            <h2>Video Data</h2>
            {dataContents}
        </div>
    );
}

export default VideoData;