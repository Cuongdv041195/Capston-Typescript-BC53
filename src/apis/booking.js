import axios from 'axios'

export const actBookCourse = async (courseInfo) => {
  try {
    const response = await axios({
      url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc',
      method: 'POST',
      data: courseInfo,
      headers: {
        TokenCybersoft:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MyIsIkhldEhhblN0cmluZyI6IjA1LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNDg2NzIwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzE1MDE0ODAwfQ.5ch0U3B88fGDn067ipN5mT-pHyAOZTzdwpBiwr4p5Aw',
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('CURRENT_USER')).accessToken
        }`,
      },
    })

    if (response.status === 200) {
      return response

      // window.location.reload();
    }
  } catch (error) {
    throw 'Lỗi'
  }
}

export const actDeleteCourse = async (courseInfo) => {
  try {
    const response = await axios({
      url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
      method: 'POST',
      data: courseInfo,
      headers: {
        TokenCybersoft:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MyIsIkhldEhhblN0cmluZyI6IjA1LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNDg2NzIwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzE1MDE0ODAwfQ.5ch0U3B88fGDn067ipN5mT-pHyAOZTzdwpBiwr4p5Aw',
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('CURRENT_USER')).accessToken
        }`,
      },
    })

    if (response.status === 200) {
      return response

      // window.location.reload();
    }
  } catch (error) {
    throw 'Lỗi'
  }
}
