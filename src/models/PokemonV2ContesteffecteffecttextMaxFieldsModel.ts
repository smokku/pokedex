import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextMaxFieldsModelBase } from "./PokemonV2ContesteffecteffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextMaxFieldsModel */
export interface PokemonV2ContesteffecteffecttextMaxFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextMaxFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextMaxFields, pokemonV2ContesteffecteffecttextMaxFieldsModelPrimitives, PokemonV2ContesteffecteffecttextMaxFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextMaxFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContesteffecteffecttextMaxFieldsModel = PokemonV2ContesteffecteffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
