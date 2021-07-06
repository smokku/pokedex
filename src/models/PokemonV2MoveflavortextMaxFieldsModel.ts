import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextMaxFieldsModelBase } from "./PokemonV2MoveflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextMaxFieldsModel */
export interface PokemonV2MoveflavortextMaxFieldsModelType extends Instance<typeof PokemonV2MoveflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextMaxFieldsModel */
export { selectFromPokemonV2MoveflavortextMaxFields, pokemonV2MoveflavortextMaxFieldsModelPrimitives, PokemonV2MoveflavortextMaxFieldsModelSelector } from "./PokemonV2MoveflavortextMaxFieldsModel.base"

/**
 * PokemonV2MoveflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveflavortextMaxFieldsModel = PokemonV2MoveflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
