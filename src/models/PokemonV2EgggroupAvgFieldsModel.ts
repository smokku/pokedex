import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupAvgFieldsModelBase } from "./PokemonV2EgggroupAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupAvgFieldsModel */
export interface PokemonV2EgggroupAvgFieldsModelType extends Instance<typeof PokemonV2EgggroupAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupAvgFieldsModel */
export { selectFromPokemonV2EgggroupAvgFields, pokemonV2EgggroupAvgFieldsModelPrimitives, PokemonV2EgggroupAvgFieldsModelSelector } from "./PokemonV2EgggroupAvgFieldsModel.base"

/**
 * PokemonV2EgggroupAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EgggroupAvgFieldsModel = PokemonV2EgggroupAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
