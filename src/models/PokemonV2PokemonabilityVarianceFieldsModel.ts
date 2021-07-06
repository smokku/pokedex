import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityVarianceFieldsModelBase } from "./PokemonV2PokemonabilityVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityVarianceFieldsModel */
export interface PokemonV2PokemonabilityVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonabilityVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityVarianceFieldsModel */
export { selectFromPokemonV2PokemonabilityVarianceFields, pokemonV2PokemonabilityVarianceFieldsModelPrimitives, PokemonV2PokemonabilityVarianceFieldsModelSelector } from "./PokemonV2PokemonabilityVarianceFieldsModel.base"

/**
 * PokemonV2PokemonabilityVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonabilityVarianceFieldsModel = PokemonV2PokemonabilityVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
