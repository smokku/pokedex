import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceModelBase } from "./PokemonV2ExperienceModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceModel */
export interface PokemonV2ExperienceModelType extends Instance<typeof PokemonV2ExperienceModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceModel */
export { selectFromPokemonV2Experience, pokemonV2ExperienceModelPrimitives, PokemonV2ExperienceModelSelector } from "./PokemonV2ExperienceModel.base"

/**
 * PokemonV2ExperienceModel
 *
 * columns and relationships of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceModel = PokemonV2ExperienceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
