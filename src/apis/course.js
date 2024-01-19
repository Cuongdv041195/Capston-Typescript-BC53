import { GROUP_CODE } from '../constants'
import fetcher from './fetcher'

export const getListCourseAPI = async (name) => {
  try {
    const response = await fetcher.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
      params: {
        maNhom: GROUP_CODE,
        tenKhoaHoc: name,
      },
    })

    return response.data
  } catch (error) {
    throw 'Lỗi'
  }
}

export const getListCoursePageAPI = async () => {
  try {
    const response = await fetcher.get(
      '/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
      {
        params: {
          maNhom: GROUP_CODE,
          page: 2,
          pageSize: 8,
        },
      }
    )

    return response.data.items
  } catch (error) {
    throw 'Lỗi'
  }
}

export const getListCourseCatalogAPI = async () => {
  try {
    const response = await fetcher.get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')

    return response.data
  } catch (error) {
    throw 'Lỗi'
  }
}

export const getDetailCourseCatalogAPI = async (courseID) => {
  try {
    const response = await fetcher.get('/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc', {
      params: {
        maNhom: GROUP_CODE,
        maDanhMuc: courseID,
      },
    })

    return response.data
  } catch (error) {
    throw 'Lỗi'
  }
}

export const getDetailCourseAPI = async (courseID) => {
  try {
    const response = await fetcher.get('/QuanLyKhoaHoc/LayThongTinKhoaHoc', {
      params: {
        maKhoaHoc: courseID,
      },
    })

    return response.data
  } catch (error) {
    throw 'Lỗi'
  }
}
