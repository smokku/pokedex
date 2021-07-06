import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeMinFieldsModelBase } from "./PokemonV2PokemontypeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeMinFieldsModel */
export interface PokemonV2PokemontypeMinFieldsModelType extends Instance<typeof PokemonV2PokemontypeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeMinFieldsModel */
export { selectFromPokemonV2PokemontypeMinFields, pokemonV2PokemontypeMinFieldsModelPrimitives, PokemonV2PokemontypeMinFieldsModelSelector } from "./PokemonV2PokemontypeMinFieldsModel.base"

/**
 * PokemonV2PokemontypeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemontypeMinFieldsModel = PokemonV2PokemontypeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
