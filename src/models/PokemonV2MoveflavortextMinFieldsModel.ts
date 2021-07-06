import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextMinFieldsModelBase } from "./PokemonV2MoveflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextMinFieldsModel */
export interface PokemonV2MoveflavortextMinFieldsModelType extends Instance<typeof PokemonV2MoveflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextMinFieldsModel */
export { selectFromPokemonV2MoveflavortextMinFields, pokemonV2MoveflavortextMinFieldsModelPrimitives, PokemonV2MoveflavortextMinFieldsModelSelector } from "./PokemonV2MoveflavortextMinFieldsModel.base"

/**
 * PokemonV2MoveflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveflavortextMinFieldsModel = PokemonV2MoveflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
