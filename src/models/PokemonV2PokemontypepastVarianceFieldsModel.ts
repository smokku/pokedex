import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastVarianceFieldsModelBase } from "./PokemonV2PokemontypepastVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastVarianceFieldsModel */
export interface PokemonV2PokemontypepastVarianceFieldsModelType extends Instance<typeof PokemonV2PokemontypepastVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastVarianceFieldsModel */
export { selectFromPokemonV2PokemontypepastVarianceFields, pokemonV2PokemontypepastVarianceFieldsModelPrimitives, PokemonV2PokemontypepastVarianceFieldsModelSelector } from "./PokemonV2PokemontypepastVarianceFieldsModel.base"

/**
 * PokemonV2PokemontypepastVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemontypepastVarianceFieldsModel = PokemonV2PokemontypepastVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
