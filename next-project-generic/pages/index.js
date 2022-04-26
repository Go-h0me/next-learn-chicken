import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg",
//     address: "Some adress ,treets 123 ,456 Some City ,",
//     description: "This a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg",
//     address: "Some adress ,treets 123 ,456 Some City ,",
//     description: "This a second meetup!",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse  huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req  = context.req;
//   const res = context.res;

//   //fetch data from an API

//   return {
//     props: {
//       meetups:DUMMY_MEETUPS
//     }

//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://Gohome:Upd2RvCiAsSLQctk@cluster0.n5txx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
