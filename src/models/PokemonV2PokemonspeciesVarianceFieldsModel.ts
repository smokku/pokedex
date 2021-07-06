import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesVarianceFieldsModelBase } from "./PokemonV2PokemonspeciesVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesVarianceFieldsModel */
export interface PokemonV2PokemonspeciesVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesVarianceFieldsModel */
export { selectFromPokemonV2PokemonspeciesVarianceFields, pokemonV2PokemonspeciesVarianceFieldsModelPrimitives, PokemonV2PokemonspeciesVarianceFieldsModelSelector } from "./PokemonV2PokemonspeciesVarianceFieldsModel.base"

/**
 * PokemonV2PokemonspeciesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspeciesVarianceFieldsModel = PokemonV2PokemonspeciesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
