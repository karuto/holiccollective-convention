import React from "react";
import styles from "./Team.css";
import avatarKaruto from "../../assets/avatar-karuto.png";
import avatarAbu from "../../assets/avatar-abu.jpg";
import avatarRenbaibai from "../../assets/avatar-renbaibai.jpg";
import avatarMochuuu from "../../assets/avatar-mochuuu.jpg";
import Heading from "../Heading/Heading";

function Team() {
  const TEAM_SUBTITLE = "Our collective";
  const disclaimer =
    "Holic Collective is a small, non-commercial passion project run by a close-knit group of artists. While we're flattered by the interest, we're currently at capacity and not accepting new members to our collective. Thank you for understanding!";
  const content = {
    title: "Meet the Fam",
    members: [
      {
        name: "Karuto",
        role: ["Organizer", "Product Designer"],
        avatar: avatarKaruto,
        description:
          "I work with my artist overlords to make sure their beautiful illustrations turn into eye-popping products! As a tech nerd, I love to fiddle and experiment with print and acrylic technologies.",
        highlight:
          "I also run the collective and will be the one vending at conventions!",
      },
      {
        name: "Abu",
        role: ["Illustrator"],
        avatar: avatarAbu,
        description:
          "Hi, I'm Abu! With nearly a decade of experience creating fanart and an obsession with Honkai Star Rail, I love gathering feedback from con attendees. I truly believe my art shines the brightest when experienced in person!",
      },
      {
        name: "RenBaiBai",
        role: ["Illustrator", "Product Designer"],
        avatar: avatarRenbaibai,
        description:
          "Multi-fandom artist who loves brainstorming new forms to breathe life into my art. Your husbando can come in all shapes and forms! Genshin, Honkai Star Rail, Love and Deep Space... I love them all! ",
      },
      {
        name: "Mochuuu",
        role: ["Illustrator"],
        avatar: avatarMochuuu,
        description:
          "I'm in year-round low energy mode because I devoted all my energy to creating KaeLuc art.",
      },
    ],
  };

  return (
    <section className={styles.team}>
      <Heading subtitle={TEAM_SUBTITLE} title={content.title} />
      <div className={styles.team__list}>
        {content.members.map((member, index) => (
          <div key={index} className={styles.team__member}>
            <div className={styles.team__roleContainer}>
              {member.role &&
                member.role.map((role, i) => (
                  <span key={i} className={styles.team__role}>
                    {role}
                  </span>
                ))}
            </div>
            <img
              src={`dist/${member.avatar}`}
              alt={`${member.name}'s avatar`}
              className={styles.team__avatar}
            />
            <div className={styles.team__info}>
              <h3 className={styles.team__name}>{member.name}</h3>
              {member.name === "Karuto" ? (
                <p className={styles.team__description}>
                  {member.description + " "}
                  <span className={styles.team__highlight}>
                    {member.highlight}
                  </span>
                </p>
              ) : (
                <p className={styles.team__description}>{member.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.team__disclaimer}>
        <p className={styles.team__disclaimerText}>{disclaimer}</p>
      </div>
    </section>
  );
}

export default Team;
