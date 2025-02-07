import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosService } from "../Utilities/Apiservices";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      book: {
        title: "",
        ISBN: "",
        pub: "",
        img: "",
        about: "",
      },
      author: {
        name: "",
        birth: "",
        bio: "",
        img: "",
      },
    },
    validationSchema: Yup.object().shape({
      book: Yup.object().shape({
        title: Yup.string().required("Title is Required"),
        ISBN: Yup.string()
          .required("ISBN number required")
          .matches(/\d{13}/, "Enter a valid 13-digit ISBN Number"),
        pub: Yup.date().required("Published date Required"),
        about: Yup.string().required("About Book is required"),
        img: Yup.string().required("Image URL is required"),
      }),
      author: Yup.object().shape({
        name: Yup.string().required("Author name is Required"),
        birth: Yup.date().required("Birth date Required"),
        bio: Yup.string().required("Biography is required"),
        img: Yup.string().required("Image URL is required"),
      }),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axiosService.post("/users", values);
        if (res.status === 201) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold underline mb-4">Book Details</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="book.title"
            className="w-full p-2 border rounded-md"
            onChange={formik.handleChange}
            value={formik.values.book.title}
          />
          {formik.touched.book?.title && formik.errors.book?.title && (
            <p className="text-red-500 text-sm">{formik.errors.book.title}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">ISBN</label>
            <input
              type="text"
              name="book.ISBN"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.book.ISBN}
            />
            {formik.touched.book?.ISBN && formik.errors.book?.ISBN && (
              <p className="text-red-500 text-sm">{formik.errors.book.ISBN}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Published Date</label>
            <input
              type="date"
              name="book.pub"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.book.pub}
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Book Cover Image</label>
          <input
            type="url"
            name="book.img"
            className="w-full p-2 border rounded-md"
            onChange={formik.handleChange}
            value={formik.values.book.img}
          />
        </div>
        <div>
          <label className="block font-medium">About</label>
          <textarea
            name="book.about"
            className="w-full p-2 border rounded-md"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.book.about}
          />
        </div>

        <h1 className="text-2xl font-bold underline mb-4">Author Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Author Name</label>
            <input
              type="text"
              name="author.name"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.author.name}
            />
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="author.birth"
              className="w-full p-2 border rounded-md"
              onChange={formik.handleChange}
              value={formik.values.author.birth}
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Author Image URL</label>
          <input
            type="url"
            name="author.img"
            className="w-full p-2 border rounded-md"
            onChange={formik.handleChange}
            value={formik.values.author.img}
          />
        </div>
        <div>
          <label className="block font-medium">Biography</label>
          <textarea
            name="author.bio"
            className="w-full p-2 border rounded-md"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.author.bio}
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
