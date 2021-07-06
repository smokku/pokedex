import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextStddevPopFieldsModelBase } from "./PokemonV2ContesteffecteffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextStddevPopFieldsModel */
export interface PokemonV2ContesteffecteffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextStddevPopFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextStddevPopFields, pokemonV2ContesteffecteffecttextStddevPopFieldsModelPrimitives, PokemonV2ContesteffecteffecttextStddevPopFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesteffecteffecttextStddevPopFieldsModel = PokemonV2ContesteffecteffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
