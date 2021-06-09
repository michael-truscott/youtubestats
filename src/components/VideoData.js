import React from 'react';

function VideoData(props) {
    let dataContents;
    if (!props.data) {
        dataContents = (
            <p>No Data</p>
        );
    } else {
        let tags;
        if (props.data.tags) {
            tags = (
                <ul>
                    {props.data.tags.map((tag,i) => <li key={i}>{tag}</li>)}
                </ul>
            );
        } else {
            tags = ' - None';
        }
        dataContents = (
            <ul>
                <h3>Thumbnail</h3>
                <img src={props.data.thumbnail.url} alt="Video Thumbnail"
                    width={props.data.thumbnail.width}
                    height={props.data.thumbnail.height} />
                <li><b>Title</b> - {props.data.title}</li>
                <li><b>Link</b> - <a href={props.data.url} target="_blank" rel="noopener noreferrer">{props.data.url}</a></li>
                <li><b>Channel Title</b> - {props.data.channelTitle}</li>
                <li><b>View Count</b> - {props.data.statistics.viewCount}</li>
                <li><b>Likes</b> - {props.data.statistics.likeCount}</li>
                <li><b>Dislikes</b> - {props.data.statistics.dislikeCount}</li>
                <li><b>Comments</b> - {props.data.statistics.commentCount}</li>
                <li><b>Tags</b>{tags}</li>
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