import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { envelopeSquare } from "react-icons-kit/fa/envelopeSquare";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

export default function SocialShare({ title, url }) {
  return (
    <>
      <BaseTitle title="Share on:" size="H5" />
      <FacebookShareButton url={url} quote={title}>
        <div title="share on facebook">
          <Icon size={32} icon={facebookSquare} />
        </div>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <div title="share on Twitter">
          <Icon size={32} icon={twitterSquare} />
        </div>
      </TwitterShareButton>
      <LinkedinShareButton url={url} windowWidth={750} windowHeight={600}>
        <div title="share on Linkedin">
          <Icon size={32} icon={linkedinSquare} />
        </div>
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title} body={title}>
        <div title="share on mail">
          <Icon size={32} icon={envelopeSquare} />
        </div>
      </EmailShareButton>
      <hr />
    </>
  );
}
