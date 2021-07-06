import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceMaxFieldsModelBase } from "./PokemonV2ExperienceMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceMaxFieldsModel */
export interface PokemonV2ExperienceMaxFieldsModelType extends Instance<typeof PokemonV2ExperienceMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceMaxFieldsModel */
export { selectFromPokemonV2ExperienceMaxFields, pokemonV2ExperienceMaxFieldsModelPrimitives, PokemonV2ExperienceMaxFieldsModelSelector } from "./PokemonV2ExperienceMaxFieldsModel.base"

/**
 * PokemonV2ExperienceMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ExperienceMaxFieldsModel = PokemonV2ExperienceMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
