export type UpdateAttendancePreferenceActionType = ReturnType<
  typeof updateAttendancePreference
>;

export function updateAttendancePreference(data: string) {
  return {
    type: '@preferences/UPDATE_ATTENDANCE_PREFERENCE',
    payload: { data },
  };
}
