gcloud builds submit --config cloudbuild.yaml

gcloud run services update ai-workshop --region us-central1 --update-env-vars VITE_API_URL=https://ai-workshop-711582759542.us-central1.run.app,GMAIL_APP_PASSWORD='ncbp efic orae cruq'
