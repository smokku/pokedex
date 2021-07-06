import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeSumFieldsModelBase } from "./PokemonV2PokemontypeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeSumFieldsModel */
export interface PokemonV2PokemontypeSumFieldsModelType extends Instance<typeof PokemonV2PokemontypeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeSumFieldsModel */
export { selectFromPokemonV2PokemontypeSumFields, pokemonV2PokemontypeSumFieldsModelPrimitives, PokemonV2PokemontypeSumFieldsModelSelector } from "./PokemonV2PokemontypeSumFieldsModel.base"

/**
 * PokemonV2PokemontypeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemontypeSumFieldsModel = PokemonV2PokemontypeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
