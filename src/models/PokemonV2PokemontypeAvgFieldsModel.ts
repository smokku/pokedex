import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeAvgFieldsModelBase } from "./PokemonV2PokemontypeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeAvgFieldsModel */
export interface PokemonV2PokemontypeAvgFieldsModelType extends Instance<typeof PokemonV2PokemontypeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeAvgFieldsModel */
export { selectFromPokemonV2PokemontypeAvgFields, pokemonV2PokemontypeAvgFieldsModelPrimitives, PokemonV2PokemontypeAvgFieldsModelSelector } from "./PokemonV2PokemontypeAvgFieldsModel.base"

/**
 * PokemonV2PokemontypeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemontypeAvgFieldsModel = PokemonV2PokemontypeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
