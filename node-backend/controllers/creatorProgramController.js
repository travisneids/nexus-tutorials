exports.validateCode = async (req, res) => {
  const { code } = req.params;

  try {
    const response = await fetch(
      `https://api.nexus-dev.gg/v1/manage/members/${code}`,
      {
        method: "GET",
        headers: {
          "x-shared-secret": process.env.NEXUS_PUBLIC_KEY,
        },
      }
    );

    const data = await response.json();

    if (data.code === "CodeNotInGroup") {
      return res.status(404).json({
        message: `No Nexus member found with referral code ${code}`,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
