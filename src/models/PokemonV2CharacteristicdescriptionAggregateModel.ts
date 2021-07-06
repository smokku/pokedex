import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionAggregateModelBase } from "./PokemonV2CharacteristicdescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionAggregateModel */
export interface PokemonV2CharacteristicdescriptionAggregateModelType extends Instance<typeof PokemonV2CharacteristicdescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionAggregateModel */
export { selectFromPokemonV2CharacteristicdescriptionAggregate, pokemonV2CharacteristicdescriptionAggregateModelPrimitives, PokemonV2CharacteristicdescriptionAggregateModelSelector } from "./PokemonV2CharacteristicdescriptionAggregateModel.base"

/**
 * PokemonV2CharacteristicdescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionAggregateModel = PokemonV2CharacteristicdescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
