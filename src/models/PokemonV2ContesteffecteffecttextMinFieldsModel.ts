import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextMinFieldsModelBase } from "./PokemonV2ContesteffecteffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextMinFieldsModel */
export interface PokemonV2ContesteffecteffecttextMinFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextMinFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextMinFields, pokemonV2ContesteffecteffecttextMinFieldsModelPrimitives, PokemonV2ContesteffecteffecttextMinFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextMinFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContesteffecteffecttextMinFieldsModel = PokemonV2ContesteffecteffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
