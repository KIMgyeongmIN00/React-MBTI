import { useState } from 'react';
import Swal from 'sweetalert2';
import { updateProfile } from '../../api/auth';

export const useEditNickname = (user, saveUserInformation) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleEdit = () => {
    setNewName(user?.name || "");
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!newName.trim()) return;
    setIsSaving(true);
    try {
      await updateProfile({ nickname: newName }, user.accessToken);
      saveUserInformation({ ...user, nickname: newName.trim() });
      setIsEditing(false);
      Swal.fire({
        title: "닉네임 변경 성공!",
        text: `${newName}님 안녕하세요!`,
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      Swal.fire({
        title: "닉네임 변경 실패",
        text: `다시 시도 하세요`,
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return {
    isEditing,
    newName,
    isSaving,
    setNewName,
    handleEdit,
    handleSave,
    handleCancel,
  };
};

