import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameStddevFieldsModelBase } from "./PokemonV2LanguagenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameStddevFieldsModel */
export interface PokemonV2LanguagenameStddevFieldsModelType extends Instance<typeof PokemonV2LanguagenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameStddevFieldsModel */
export { selectFromPokemonV2LanguagenameStddevFields, pokemonV2LanguagenameStddevFieldsModelPrimitives, PokemonV2LanguagenameStddevFieldsModelSelector } from "./PokemonV2LanguagenameStddevFieldsModel.base"

/**
 * PokemonV2LanguagenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LanguagenameStddevFieldsModel = PokemonV2LanguagenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
