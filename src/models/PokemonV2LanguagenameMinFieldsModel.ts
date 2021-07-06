import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameMinFieldsModelBase } from "./PokemonV2LanguagenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameMinFieldsModel */
export interface PokemonV2LanguagenameMinFieldsModelType extends Instance<typeof PokemonV2LanguagenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameMinFieldsModel */
export { selectFromPokemonV2LanguagenameMinFields, pokemonV2LanguagenameMinFieldsModelPrimitives, PokemonV2LanguagenameMinFieldsModelSelector } from "./PokemonV2LanguagenameMinFieldsModel.base"

/**
 * PokemonV2LanguagenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LanguagenameMinFieldsModel = PokemonV2LanguagenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
