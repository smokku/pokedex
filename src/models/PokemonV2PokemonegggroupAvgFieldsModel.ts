import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupAvgFieldsModelBase } from "./PokemonV2PokemonegggroupAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupAvgFieldsModel */
export interface PokemonV2PokemonegggroupAvgFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupAvgFieldsModel */
export { selectFromPokemonV2PokemonegggroupAvgFields, pokemonV2PokemonegggroupAvgFieldsModelPrimitives, PokemonV2PokemonegggroupAvgFieldsModelSelector } from "./PokemonV2PokemonegggroupAvgFieldsModel.base"

/**
 * PokemonV2PokemonegggroupAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonegggroupAvgFieldsModel = PokemonV2PokemonegggroupAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
