import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {commentStyles} from './styles';
import {CommentProps} from '../helpers/types';

const Comments: React.FC<CommentProps> = ({
  comments,
  newComment,
  setNewComment,
  handleSubmitComment,
}) => {
  return (
    <View>
      <Text style={commentStyles.title}>Comments</Text>
      <TextInput
        style={commentStyles.commentInput}
        placeholder="Write your comment..."
        value={newComment}
        onChangeText={text => setNewComment(text)}
      />
      <View style={commentStyles.commentButtonContainer}>
        <Pressable
          style={commentStyles.submitButton}
          onPress={handleSubmitComment}>
          <Text style={commentStyles.submitButtonText}>Submit Comment</Text>
        </Pressable>
      </View>
      <View style={commentStyles.commentsContainer}>
        {comments.map((comment, index) => (
          <View
            key={index}
            style={[
              commentStyles.commentItem,
              index % 2 === 0
                ? commentStyles.lightGrayBackground
                : commentStyles.midGrayBackground,
            ]}>
            <View style={commentStyles.accountSection}>
              <MaterialCommunityIcon
                name={'account'}
                size={25}
                style={{paddingRight: 10}}
                suppressHighlighting
              />
              <Text style={commentStyles.commentUserName}>
                {comment.userName}
              </Text>
            </View>

            <View style={commentStyles.commentSection}>
              <MaterialCommunityIcon
                name={'comment'}
                size={25}
                style={{paddingRight: 10}}
                suppressHighlighting
              />
              <Text style={commentStyles.commentText}>{comment.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Comments;
