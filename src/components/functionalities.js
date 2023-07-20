

//set video1 to previous video2
//generate new video two

// {<CorrectAnswer set1Id={setVideo1Id} set1Title={setVideo1Title} set1Views={setVideo1Views}
// id2={video2Id} title2={video2Title} views2={video2Views}/>}
export const CorrectAnswer = (props) => {
    const vid2Id=props.id2;
    const vid2Title=props.title2;
    const vid2Views=props.views2;

    props.set1Id(vid2Id);
    props.set1Title(vid2Title);
    props.set1Views(vid2Views);
}

