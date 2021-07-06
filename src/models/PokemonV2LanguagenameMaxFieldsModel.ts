import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameMaxFieldsModelBase } from "./PokemonV2LanguagenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameMaxFieldsModel */
export interface PokemonV2LanguagenameMaxFieldsModelType extends Instance<typeof PokemonV2LanguagenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameMaxFieldsModel */
export { selectFromPokemonV2LanguagenameMaxFields, pokemonV2LanguagenameMaxFieldsModelPrimitives, PokemonV2LanguagenameMaxFieldsModelSelector } from "./PokemonV2LanguagenameMaxFieldsModel.base"

/**
 * PokemonV2LanguagenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LanguagenameMaxFieldsModel = PokemonV2LanguagenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
