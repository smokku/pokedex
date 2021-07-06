import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextStddevFieldsModelBase } from "./PokemonV2ContesteffecteffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextStddevFieldsModel */
export interface PokemonV2ContesteffecteffecttextStddevFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextStddevFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextStddevFields, pokemonV2ContesteffecteffecttextStddevFieldsModelPrimitives, PokemonV2ContesteffecteffecttextStddevFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesteffecteffecttextStddevFieldsModel = PokemonV2ContesteffecteffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
