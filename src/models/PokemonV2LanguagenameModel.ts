import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameModelBase } from "./PokemonV2LanguagenameModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameModel */
export interface PokemonV2LanguagenameModelType extends Instance<typeof PokemonV2LanguagenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameModel */
export { selectFromPokemonV2Languagename, pokemonV2LanguagenameModelPrimitives, PokemonV2LanguagenameModelSelector } from "./PokemonV2LanguagenameModel.base"

/**
 * PokemonV2LanguagenameModel
 *
 * columns and relationships of "pokemon_v2_languagename"
 */
export const PokemonV2LanguagenameModel = PokemonV2LanguagenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
