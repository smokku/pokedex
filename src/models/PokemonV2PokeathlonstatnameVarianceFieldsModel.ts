import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameVarianceFieldsModelBase } from "./PokemonV2PokeathlonstatnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameVarianceFieldsModel */
export interface PokemonV2PokeathlonstatnameVarianceFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameVarianceFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameVarianceFields, pokemonV2PokeathlonstatnameVarianceFieldsModelPrimitives, PokemonV2PokeathlonstatnameVarianceFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarianceFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokeathlonstatnameVarianceFieldsModel = PokemonV2PokeathlonstatnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
