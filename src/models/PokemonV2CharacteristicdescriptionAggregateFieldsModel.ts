import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionAggregateFieldsModelBase } from "./PokemonV2CharacteristicdescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionAggregateFieldsModel */
export interface PokemonV2CharacteristicdescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionAggregateFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionAggregateFields, pokemonV2CharacteristicdescriptionAggregateFieldsModelPrimitives, PokemonV2CharacteristicdescriptionAggregateFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionAggregateFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_characteristicdescription"
 */
export const PokemonV2CharacteristicdescriptionAggregateFieldsModel = PokemonV2CharacteristicdescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
