import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameAvgFieldsModelBase } from "./PokemonV2AbilitynameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameAvgFieldsModel */
export interface PokemonV2AbilitynameAvgFieldsModelType extends Instance<typeof PokemonV2AbilitynameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameAvgFieldsModel */
export { selectFromPokemonV2AbilitynameAvgFields, pokemonV2AbilitynameAvgFieldsModelPrimitives, PokemonV2AbilitynameAvgFieldsModelSelector } from "./PokemonV2AbilitynameAvgFieldsModel.base"

/**
 * PokemonV2AbilitynameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2AbilitynameAvgFieldsModel = PokemonV2AbilitynameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
