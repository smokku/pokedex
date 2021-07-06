import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextStddevFieldsModelBase } from "./PokemonV2MoveflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextStddevFieldsModel */
export interface PokemonV2MoveflavortextStddevFieldsModelType extends Instance<typeof PokemonV2MoveflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextStddevFieldsModel */
export { selectFromPokemonV2MoveflavortextStddevFields, pokemonV2MoveflavortextStddevFieldsModelPrimitives, PokemonV2MoveflavortextStddevFieldsModelSelector } from "./PokemonV2MoveflavortextStddevFieldsModel.base"

/**
 * PokemonV2MoveflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveflavortextStddevFieldsModel = PokemonV2MoveflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
