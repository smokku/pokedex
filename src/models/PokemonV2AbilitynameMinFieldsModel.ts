import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameMinFieldsModelBase } from "./PokemonV2AbilitynameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameMinFieldsModel */
export interface PokemonV2AbilitynameMinFieldsModelType extends Instance<typeof PokemonV2AbilitynameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameMinFieldsModel */
export { selectFromPokemonV2AbilitynameMinFields, pokemonV2AbilitynameMinFieldsModelPrimitives, PokemonV2AbilitynameMinFieldsModelSelector } from "./PokemonV2AbilitynameMinFieldsModel.base"

/**
 * PokemonV2AbilitynameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilitynameMinFieldsModel = PokemonV2AbilitynameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
